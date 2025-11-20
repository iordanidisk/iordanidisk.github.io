
export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <a href="https://www.infineon.com/" target="_blank" className='font-bold text-glow text-primary'>Infineon</a>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-left">
                            Threat Intelligence Analyst
                            </h2>
                            <p className="text-md text-left">
                                My main goal was to automate daily cybersecurity tasks and be up to date with all the new vulnerabilities that could potentially affect the company. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <a href="https://www.dts.de/en/" target="_blank" className='font-bold text-glow text-primary'>DTS</a>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-left">
                            SOC Analyst
                            </h2>
                            <p className="text-md text-left">
                                I was working with the LogRhythm SIEM and the Cortex XDR to investigate security alerts. Additionally I was using MISP to keep a record of these events.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <a href="https://www.filmfestival.gr/en/" target="_blank" className='font-bold text-glow text-primary'>TIFF</a>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg text-left">
                            IT Assistant
                            </h2>
                            <p className="text-md text-left">
                                My main task was to insure that all the devices of the organization were working as excpected and all the users were able to work without interuption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
};