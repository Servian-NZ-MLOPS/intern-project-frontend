/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudioButtonHeroLayoutOverridesProps = {
    StudioButtonHeroLayout?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Body Area"?: PrimitiveOverrideProps<FlexProps>;
    "LOREM IPSUM"?: PrimitiveOverrideProps<TextProps>;
    "Ut enim ad minim veniam quis nostrud"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type StudioButtonHeroLayoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    backgroundImageURL?: String;
    topText?: String;
    midText?: String;
    botText?: String;
    studioOnClickHandler?: (event: SyntheticEvent) => void;
    isLoading?: Boolean;
} & {
    overrides?: StudioButtonHeroLayoutOverridesProps | undefined | null;
}>;
export default function StudioButtonHeroLayout(props: StudioButtonHeroLayoutProps): React.ReactElement;
