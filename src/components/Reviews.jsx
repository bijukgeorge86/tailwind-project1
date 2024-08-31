const Reviews = () => {
    return (
        <>
            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl font-bold text-center">
                        What Manage Offers
                    </h2>
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightyGray md:w-1/3">
                            <img
                                className="w-16 -mt-14"
                                src="assets\avatar-anisha.png"
                                alt=""
                            />
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s.”
                            </p>
                        </div>
                        <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img
                                src="assets/avatar-ali.png"
                                class="w-16 -mt-14"
                                alt=""
                            />
                            <h5 class="text-lg font-bold">Ali Bravo</h5>
                            <p class="text-sm text-darkGrayishBlue">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s.”
                            </p>
                        </div>
                        <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img
                                src="assets/avatar-richard.png"
                                class="w-16 -mt-14"
                                alt=""
                            />
                            <h5 class="text-lg font-bold">Richard Watts</h5>
                            <p class="text-sm text-darkGrayishBlue">
                                “Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s.”
                            </p>
                        </div>
                    </div>
                    <div className="my-16">
                        <a
                            href="#"
                            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                            onClick={(e) => e.preventDefault()}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;
