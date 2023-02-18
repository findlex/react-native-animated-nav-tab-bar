
export enum TabElementDisplayOptions {
    ICON_ONLY = "icon-only",
    LABEL_ONLY = 'label-only',
    BOTH = 'both'
  }
  
  export enum DotSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    DEFAULT = 'default' // not in docs
  }
  
  export enum TabButtonLayout {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal'
  }
  
  export interface IAppearanceOptions {
    topPadding: number;
    bottomPadding: number;
    horizontalPadding: number;
    tabBarBackground: string;
    activeTabBackgrounds?: string | string[];
    activeColors?: string | string[];
    floating: boolean;
    dotCornerRadius: number;
    whenActiveShow: TabElementDisplayOptions;
    whenInactiveShow: TabElementDisplayOptions;
    dotSize: DotSize;
    shadow: boolean;
    tabButtonLayout: TabButtonLayout;
    // iOS only: position the nav bar at the top
    topPositioned?: boolean;
    // change the width when floating
    forcedWidth?: number
  }
  