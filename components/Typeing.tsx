'use client'
import { TypeAnimation } from 'react-type-animation';

export const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am Frontend Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am Backend Developer',
                1000,
                'I am  Website Designer',
                1000,
                'I am DevOps Developer',
                1000
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
