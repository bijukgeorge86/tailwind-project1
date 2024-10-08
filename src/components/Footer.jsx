const Footer = () => {
    return (
        <>
            <footer className="bg-veryDarkBlue">
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; 2024, All Rights Reserved.
                        </div>
                        <div>
                            <img
                                src="assets\logo-white.svg"
                                className="h-8"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                    src="assets\icon-facebook.svg"
                                    className="h-8"
                                    alt=""
                                />
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                    src="assets/icon-youtube.svg"
                                    alt=""
                                    class="h-8"
                                />
                            </a>

                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                    src="assets/icon-twitter.svg"
                                    alt=""
                                    class="h-8"
                                />
                            </a>

                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                    src="assets/icon-pinterest.svg"
                                    alt=""
                                    class="h-8"
                                />
                            </a>

                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img
                                    src="assets/icon-instagram.svg"
                                    alt=""
                                    class="h-8"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                About
                            </a>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Careers
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Community
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-brightRed"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <form action="">
                            <div className="flex space">
                                <input
                                    placeholder="Updated in your inbox"
                                    type="text"
                                    className="flex-1 px-4 rounded-full focus:outline-none"
                                />
                                <button
                                    className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Go
                                </button>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">
                            Copyright &copy; 2024, All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
