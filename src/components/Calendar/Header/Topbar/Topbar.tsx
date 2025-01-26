import { useTheme } from "styled-components";
import { FC } from "react";
import { IconHistory, IconRefresh } from "@tabler/icons-react";
import { Icon, IconButton } from "@/components";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import {
  NavigationWrapper,
  Wrapper,
  NavBtn,
  Today,
  Zoom,
  OptionsContainer,
  HistoryButton
} from "./styles";
import { TopbarProps } from "./types";

const Topbar: FC<TopbarProps> = ({ width, showThemeToggle, toggleTheme, openHistory, onSync }) => {
  const { topbar } = useLanguage();
  const {
    data,
    handleGoNext,
    handleGoPrev,
    handleGoToday,
    zoomIn,
    zoomOut,
    isNextZoom,
    isPrevZoom
  } = useCalendar();
  const { colors } = useTheme();

  return (
    <Wrapper width={width}>
      <NavigationWrapper>
        <NavBtn disabled={!data?.length} onClick={handleGoPrev}>
          <Icon iconName="arrowLeft" height="15" fill={colors.textPrimary} />
        </NavBtn>
        <Today onClick={handleGoToday}>{topbar.today}</Today>
        <NavBtn disabled={!data?.length} onClick={handleGoNext}>
          <Icon iconName="arrowRight" height="15" fill={colors.textPrimary} />
        </NavBtn>
      </NavigationWrapper>
      <OptionsContainer>
        <HistoryButton>
          <IconHistory size={25} onClick={openHistory} />
        </HistoryButton>
        <HistoryButton>
          <IconRefresh size={25} onClick={onSync} />
        </HistoryButton>
        <Zoom>
          <IconButton
            isDisabled={!isPrevZoom}
            onClick={zoomOut}
            isFullRounded
            iconName="subtract"
            width="14"
          />
          <IconButton
            isDisabled={!isNextZoom}
            onClick={zoomIn}
            isFullRounded
            iconName="add"
            width="14"
          />
        </Zoom>
      </OptionsContainer>
    </Wrapper>
  );
};
export default Topbar;
