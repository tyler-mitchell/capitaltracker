/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
        <div className="ml-3 inline-flex rounded-md shadow">
            <a
                href="/"
                className="inline-flex items-center justify-center
                              px-5 py-3 border border-transparent
                              text-base font-medium rounded-md
                              text-indigo-600 bg-white hover:bg-indigo-50"
            >
                Learn more
            </a>
        </div>
    );
}

export default Footer;
