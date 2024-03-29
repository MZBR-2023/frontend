import HashTag from '@/components/common/HashTag/HashTag';
import * as S from '@/components/common/HashTagInput/HashTagInput.style';

import { useHasgTag } from '@/hooks/useHashTag';

const HashTagInput = () => {
  const { tag, tagList, onChange, onKeydown, deleteHashTag } = useHasgTag();

  return (
    <S.HashTagInputWrapper>
      <S.TagInput
        type="text"
        placeholder="태그를 입력해주세요."
        value={tag}
        onChange={onChange}
        onKeyDown={onKeydown}
      />
      <S.TagContainer>
        {tagList.map((item, idx) => (
          <HashTag key={idx + item} text={item} deleteHashTag={() => deleteHashTag(item)} />
        ))}
      </S.TagContainer>
    </S.HashTagInputWrapper>
  );
};

export default HashTagInput;
