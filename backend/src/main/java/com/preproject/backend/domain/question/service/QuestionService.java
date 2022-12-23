package com.preproject.backend.domain.question.service;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.repository.MemberRepository;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.entity.QuestionTag;
import com.preproject.backend.domain.question.repository.QuestionRepository;
import com.preproject.backend.domain.tag.repository.TagRepository;
import com.preproject.backend.domain.tag.service.TagService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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
    private TagRepository tagRepository;

    private TagService tagService;

    // TODO CRUD 순서 맞춰서 작성해볼 것. (진행 중)

    //CREATE
    public Question createQuestion(Question question, List<String> tags) {
        //TODO memberId 부분 수정해야 하는지 확인하기
        // int memberId = memberRepository.~~ 형태인가;
        Member member = getMemberFromId(memberId);
        //TODO 태그 관련 설정 추가
        Set<QuestionTag> questionTagSet = tags.stream().map(
                t -> {
                    QuestionTag questionTag = new QuestionTag();
                    questionTag.setQuestion(question);
                    questionTag.setTag(tagService.tagCreateUpdate(t));
                    // 질문을 올릴때 기존의 태그일 수도 있고 새로 만드는 태그일 수 있으니
                    // 아예 Create, Update를 한번에 처리 할 수 있도록 함
                    return questionTag;
                }
        ).collect(Collectors.toSet());
        question.setQuestionTags(questionTagSet);
        return questionRepository.save(question);
    }

    // 맴버 id로 맴버 찾기
    private Member getMemberFromId(int memberId){
        return memberRepository.findById(memberId).get();
    }

    //READ
    public Question readQuestion(int questionId) {
        Question question = existQuestion(questionId); // 해당 Id 값의 질문이 존재하는지 검증
        //TODO Optional<> 와 member 패키지 활용
        // Optional<Member> member = ~~ 보안 구현 후 오기
        if(member.isPresent()){

        }
        return question;
    }

    private Question existQuestion(int questionId){
        //TODO findByID()형태
        // Optional<>을 사용하지 않을까 싶음
        // 마찬가지로 member 패키지 활용
        // 리턴 형태는 return ~~ -> new BusinessLogicException(ExceptionCode.~~) 형태
    }

    //UPDATE
    // TODO 현재는 태그 제외 글의 title과 content의 수정만 구현
    public Question updateQuestion(int questionId, Question changedQuestion, List<String> tags){
        Question question = verifyWriter(questionId); // 현재 사용자가 작성자가 맞는지
        // 해당 글 수정
        question.setTitle(changedQuestion.getTitle());
        question.setContent(changedQuestion.getContent());

        //TODO tag 관련 로직 작성
        // tag의 삭제 -> 갯수 줄이기
        // 새로운 tag 추가 -> Question-Tag 조인 엔티티 생성

        return questionRepository.save(question);
    }

    private Question verifyWriter(int questionId) {
        //TODO 현재 사용자가 작성자가 맞는지 검증하는 코드
        // int memberId = ; -> 이부분은 Secuity 구현 이후 돌아 올 것. 성공적인 로그인 후 확인을 해야 하기 때문
        Question question = existQuestion(questionId); // 해당 질문이 존재하는지 확인
        if(question.getMember().getMember_id() != memberId) {
            //TODO throw new BusinessLogicException(); 형태
        }
        return question;
    }

    //DELETE
    public void deleteQuestion(int questionId){
        Question question = verifyWriter(questionId); //현재 사용자가 작성자가 맞는지
        //TODO member 패키지 구현 후 해야 할 것
        // 삭제 성공적일 시, 질문한 사람의 질문 갯수 하나 감소 --> 테이블 명세서에 변수 추가 생각
        Member member = question.getMember();
        //TODO member.set질문갯수(member.get질문갯수 - 1) 형태
        memberRepository.save(member);
        //TODO 지워지는 질문에 있는 태그들을 -1 하기
        questionRepository.delete(question);
    }
}
