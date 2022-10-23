import Image from "next/image"
import Link from "next/link"

interface ProjectPreviewInterface {
    title: string;
    desc: string;
    link: string;
    image_name: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {

    return (
        <Link href={props.link}>
            <a href={"/"} className="w-fit m-auto mt-6 flex gap-4 flex-col ease-out duration-300 rounded bg-slate-100 p-5 hover:scale-105 hover:rotate-1">
                <div className="relative truncate w-96 h-52 m-auto">
                    <Image placeholder="blur" blurDataURL={`/${props.image_name}-b.jpg`} src={`/${props.image_name}.jpg`}
                    layout="fill"/>
                </div>
                <div className="m-auto text-center max-w-sm">
                    <div className="font-bold">{props.title}</div>
                    <div>{props.desc}</div>
                </div>
            </a>
        </Link>
    )
}

export default ProjectPreview