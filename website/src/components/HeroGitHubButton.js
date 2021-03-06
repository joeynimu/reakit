import React from "react";
import { styled, Popover } from "reakit";
import GitHubIcon from "react-icons/lib/go/mark-github";
import StarIcon from "react-icons/lib/go/star";
import ButtonRounded from "../elements/ButtonRounded";
import Icon from "../elements/Icon";
import ButtonGray from "../elements/ButtonGray";
import GitHubStarsContainer from "../containers/GitHubStarsContainer";
import ViewportContainer from "../containers/ViewportContainer";

const getPopoverPos = width => (width > 768 ? "right" : "bottom");
const getArrowPos = width => (width > 768 ? "left" : "top");

const Button = styled(ButtonGray)`
  padding: 0 20px 0 10px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const StarsPopover = styled(Popover)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  padding: 8px 10px 8px 8px;
  place-items: center;
  cursor: inherit;
  ${Popover.Arrow} {
    font-size: 14px;
  }
`;

const HeroGitHubButton = props => (
  <Button
    as={[ButtonRounded, "a"]}
    href="https://github.com/diegohaz/reakit"
    target="_blank"
    {...props}
  >
    <Icon as={GitHubIcon} />GitHub
    <ViewportContainer>
      {({ width }) => (
        <GitHubStarsContainer context="github">
          {({ stars }) => (
            <StarsPopover visible={stars > 0} pos={getPopoverPos(width)}>
              <Popover.Arrow pos={getArrowPos(width)} />
              <StarIcon /> {stars}
            </StarsPopover>
          )}
        </GitHubStarsContainer>
      )}
    </ViewportContainer>
  </Button>
);

export default HeroGitHubButton;
