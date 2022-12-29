package com.preproject.backend.domain.question.service;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.repository.MemberRepository;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.entity.QuestionTag;
import com.preproject.backend.domain.question.repository.QuestionRepository;
import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.domain.tag.repository.TagRepository;
import com.preproject.backend.domain.tag.service.TagService;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class QuestionService {
    // TODO 해당 글을 수정, 삭제할 때에는 그 사람이 제대로 접속하였는지, 다른 사람은 아니인지를 확인해야 한다.
    private QuestionRepository questionRepository;
    private MemberRepository memberRepository;
    private MemberService memberService;
    private TagRepository tagRepository;

    private TagService tagService;

    // TODO CRUD 순서 맞춰서 작성해볼 것. (진행 중)

    //CREATE
//    public Question createQuestion(Question question, List<String> tags) {
    public Question createQuestion(Question question) {
//        long memberId = memberService.getLoginMember().getMemberId();
//        Member member = getMemberFromId(memberId);
        //Member member = getMemberFromId(question.getMember().getMemberId());
        //TODO member 쪽에 질문갯수 관련 변수 추가
        // member.set질문갯수(member.get질문갯수() + 1);
        //question.setMember(member); // 해당 질문을 누가 올렸는지 연결
//        Set<QuestionTag> questionTagSet = tags.stream().map(
//                t -> {
//                    QuestionTag questionTag = new QuestionTag();
//                    questionTag.setQuestion(question);
//                    questionTag.setTag(tagService.tagCreateUpdate(t));
//                    // 질문을 올릴때 기존의 태그일 수도 있고 새로 만드는 태그일 수 있으니
//                    // 아예 Create, Update를 한번에 처리 할 수 있도록 함
//                    return questionTag;
//                }
//        ).collect(Collectors.toSet());
//        question.setQuestionTags(questionTagSet);
        return questionRepository.save(question);
    }

    // 맴버 id로 맴버 찾기
    private Member getMemberFromId(long memberId){
        return memberRepository.findById(memberId).get();
    }

    //READ
    public Question readQuestion(long questionId) {
        Question question = existQuestion(questionId); // 해당 Id 값의 질문이 존재하는지 검증
        //TODO Optional<> 와 member 패키지 활용
        // Optional<Member> member = ~~ 보안 구현 후 오기
//        if(member.isPresent()){
//            //TODO 특정 Question을 볼 수 있는 ViewQuestion 같은 클래스가 필요할 것으로 보임
//
//        }
        return question;
    }

    public Page<Question> readQuestions(int page, int size) {
        return questionRepository.findAll(
                PageRequest.of(page, size, Sort.by("questionId").descending())
        );
    }

    public Question existQuestion(long questionId){
        Optional<Question> question = questionRepository.findById(questionId);
        return question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    //UPDATE
    // TODO 현재는 태그 제외 글의 title과 content의 수정만 구현
    public Question updateQuestion(long questionId, Question changedQuestion, List<String> tagsList){
        Question question = verifyWriter(questionId); // 현재 사용자가 작성자가 맞는지
        // 해당 글 수정
        question.setTitle(changedQuestion.getTitle());
        question.setContent(changedQuestion.getContent());

        // tag의 삭제 -> 갯수 줄이기
        // 새로운 tag 추가 -> Question-Tag 조인 엔티티 생성
//        Set<QuestionTag> questionTagSet = question.getQuestionTags();
//        Set<QuestionTag> tempTagSet = new HashSet<>(); // 제거될 예정인 태그들
//        for(QuestionTag t : questionTagSet){
//            TagEntity tagEntity = t.getTag();
//            if(tagsList.contains(tagEntity.getName())){
//                // 추가되는 태그이거나 제외되는 태그만 확인 할 것이기 때문에
//                // 중복이 되는 태그는 신경쓰지 않도록 한다.
//                tagsList.remove(tagEntity.getName());
//            } else {
//                // 제거가 될 예정인 태그들
//                tagEntity.questionCountMinus();
//                tagRepository.save(tagEntity);
//                tempTagSet.add(t);
//            }
//        }
//        // Set 에서 제거가 될 예정인 태그들을 모두 제거
//        questionTagSet.removeAll(tempTagSet);

        // 나머지는 추가되는 태그들이니 저장한다.
//        for(String t : tagsList) {
//            QuestionTag questionTag = new QuestionTag();
//            questionTag.setQuestion(question);
//            questionTag.setTag(tagService.tagCreateUpdate(t)); // 해당 부분에 추가되는 태그의 count + 1이 구현되어 있음!
//            questionTagSet.add(questionTag);
//        }
        return questionRepository.save(question);
    }

    private Question verifyWriter(long questionId) {
//        long memberId = memberService.getLoginMember().getMemberId();
        Question question = existQuestion(questionId); // 해당 질문이 존재하는지 확인
//        if(question.getMember().getMemberId() != memberId) {
//            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
//        }
        return question;
    }

    //DELETE
    public void deleteQuestion(long questionId){
        Question question = verifyWriter(questionId); //현재 사용자가 작성자가 맞는지
        //TODO member 패키지 구현 후 해야 할 것
        // 삭제 성공적일 시, 질문한 사람의 질문 갯수 하나 감소 --> 테이블 명세서에 변수 추가 생각
//        Member member = question.getMember();
//        //TODO member.set질문갯수(member.get질문갯수 - 1) 형태
//        memberRepository.save(member);
//        takeAwayQuestionTag(question.getQuestionTags());
        questionRepository.delete(question);
    }

//    private void takeAwayQuestionTag(Set<QuestionTag> questionTagSet) {
//        questionTagSet.stream().forEach(qt -> {
//            TagEntity tagEntity = qt.getTag();
//            tagEntity.questionCountMinus();
//            tagRepository.save(tagEntity);
//        });
//    }
}