//Native
import React from 'react';
import { SvgProps } from 'react-native-svg';

//Styles
import {
    Button,
    ImageContainer,
    Text,
} from './styles';

interface Props {
    title: string,
    svg: React.FC<SvgProps>
}

export function SigInSocialButton({
    title,
    svg: Svg,
    ...rest
}: Props){
    return (
        <Button {...rest}>
            <ImageContainer>
                <Svg/>
            </ImageContainer>
            <Text>
                {title}
            </Text>
        </Button>

    );
}