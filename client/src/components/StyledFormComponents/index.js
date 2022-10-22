import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  padding: 180px 0 0 150px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  width: 557px;
  height: 93px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 46px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #2d2d2d;
  }
  :-ms-input-placeholder {
    color: #2d2d2d;
  }
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  box-sizing: border-box;
  width: 557px;
  height: 189px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 46px;
  ::placeholder,
  ::-webkit-textarea-placeholder {
    color: #2d2d2d;
  }
  :-ms-textarea-placeholder {
    color: #2d2d2d;
  }
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
`;

export const Button = styled.button`
  box-sizing: border-box;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  padding: 28px 52px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  padding-bottom: 30px;
`;