'use client'

import React from 'react'
import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { projects } from "@/lib/projects/projects"

const OPTIONS: EmblaOptionsType = { align: 'start', slidesToScroll: 3, loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export const ProjectsSlide = () => {
    return (
        <EmblaCarousel projects={projects} options={OPTIONS} />

    )
}
