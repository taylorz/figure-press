import styled from "styled-components"
import axios from "axios"
import { useForm } from "react-hook-form"

import {
  Grid,
  Text
} from "../components/ui"

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: none;
  font-size: ${({ theme }) => theme.text.size}px;
  line-height: ${({ theme }) => theme.text.lineHeight}px;
  font-family: ${({ theme }) => theme.text.family};
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;
const StyledButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: none;
  font-size: ${({ theme }) => theme.text.size}px;
  line-height: ${({ theme }) => theme.text.lineHeight}px;
  font-family: ${({ theme }) => theme.text.family};
  color: ${props => props.disabled ? props.theme.color.gray : props.theme.color.green};
  transition: ${({ theme }) => theme.util.transition};
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  &:hover {
    cursor: pointer
  }
`;

const Newsletter = ({ ...rest }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitted, isValid, isDirty }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data) => {
    const res = await axios({
      method: "post",
      url: "https://getform.io/f/80d749ba-240a-403f-a79d-4845f5bfc190",
      data: data
    })
  }

  return (
    <>
      {
        isSubmitted ?
          <Text lightened>Thank you for subscribing.</Text>
        :
          <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} sm={10}>
                <StyledInput
                  {...register('email', {
                    required: true,
                    min: 3,
                    pattern: {
                      value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                      message: "Please use a valid email"
                    }
                  })}
                  placeholder="Your email"
                />
                {errors.email && <Text lightened>{errors.email.message}</Text>}
              </Grid>

              <Grid item xs={12} sm={2} justifyContent="flex-end">
                <StyledButton
                  type="submit"
                  disabled={!isValid || !isDirty}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </StyledButton>
              </Grid>
            </Grid>
          </form>
      }
    </>
  )
}

export default Newsletter
