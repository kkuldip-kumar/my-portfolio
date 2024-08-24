export const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

export const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}