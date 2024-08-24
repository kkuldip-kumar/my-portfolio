'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import { ProjectCard } from '../ProjectCard'
import { Project } from '@/lib/projects/types'
import Link from 'next/link'

type PropType = {
    projects: Project[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { projects, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]) //[Autoplay()]

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="embla container mx-auto px-4 ">
            <div className="embla__controls items-center">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
                <div className="md:flex md:justify-end">
                    <Link
                        href="/projects"
                        aria-label="Projects"
                        title="Projects"
                        className="font-semibold tracking-wide text-[#5a57fb]  transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((item: Project) => (
                        <div className="embla__slide" key={item.id}>
                            <ProjectCard project={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__dots mt-5">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>

        </div>
    )
}

export default EmblaCarousel
