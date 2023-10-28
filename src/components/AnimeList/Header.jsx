import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between p-4 items-center">
            <h1 className='font-bold text-2xl text-color-primary'>{title}</h1>
            {linkHref && linkTitle ?
                <Link
                    href={linkHref}
                    className='md:text-lg text-base underline text-color-primary hover:text-color-accent transition-all'>
                    {linkTitle}
                </Link>
                : null}
        </div>
    )
}

export default Header