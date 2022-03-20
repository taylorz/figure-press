import styled from "styled-components"

const StyledText = styled.span`
  text-decoration: none;
  font-family: ${props => props.bold ? props.theme.text.familyBold : props.theme.text.familyRegular};
  font-style: ${props => props.italic ? "italic" : "none"};
  font-size: ${props => props.display ? props.theme.text.sizeLarge
    : props.theme.text.size
  }px;
  line-height: ${props => props.display ? props.theme.text.lineHeightLarge
    : props.theme.text.lineHeight
  }px;
  text-align: ${props => props.center && "center"};
  color: ${props => props.link ? props.theme.color.green
    : props.lightened ? props.theme.color.gray
      : props.theme.color.black
  };
  margin-bottom: ${props => (props.p && props.display) ? props.theme.text.lineHeightLarge
    : props.p ? props.theme.text.lineHeight
      : 0
  }px;
  display: ${props => (props.p || props.line) ? 'block'
    : 'inline'
  };
  cursor: ${props => (props.link || props.hoverable) && "pointer"};

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    font-size: ${props => props.display ? props.theme.text.size
      : props.theme.text.size
    }px;
    line-height: ${props => props.display ? props.theme.text.lineHeight
      : props.theme.text.lineHeight
    }px;
    margin-bottom: ${props => (props.p && props.display) ? props.theme.text.lineHeight
      : props.p ? props.theme.text.lineHeight
        : 0
    }px;
  }
`;

const Text = ({
  children,
  ...rest
}) => {

  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  )

}

export default Text
