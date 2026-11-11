type ProjectShowcaseProps = {
    name: string
    description: string
    link?: string
    icon?: string
}

export default function ProjectShowcase({
    name,
    description,
    icon,
}: ProjectShowcaseProps) {
    return (
        <div>
            <img src={icon} alt={`${name} project icon`} />

            <p>{description}</p>
        </div>
    )
}
