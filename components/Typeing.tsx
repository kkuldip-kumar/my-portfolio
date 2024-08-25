'use client'
import { TypeAnimation } from 'react-type-animation';

export const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am Software Developer',
                1000,
                'I am Frontend Developer',
                1000,
                'I am Backend Developer',
                1000,
                'I am  Website Designer',
                1000,
                // 'I am DevOps Developer',
                // 1000
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
