import React, { useEffect } from "react";
import '../style/PricingPackage.css';

const PricingPackages = () => {
    const learnMore = (packageType) => {
        // console.log(`Learn more about: ${packageType}`);
        // Implement actual navigation or action logic here
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated");
                    entry.target.classList.add(entry.target.dataset.animate);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pricing-packages">

            <div className="packages" id="pricing">
                <a href="/signin" target="_blank" rel="noopener noreferrer" className="package">
                    <div onClick={() => learnMore("Basic")}>
                        <h3>Basic Plan</h3>
                        <h4>₦200/month</h4>
                        <p>Annual Payment (Best Value): 2,160 Naira/year (save 10%)</p>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>Item registration</li>
                            <li>Reporting lost items</li>
                            <li>Access to the finders' community</li>
                            <li>LFReturnMe Pick Up Location</li>
                        </ul>
                        <h5>Additional Tags for Naija Saver Plan:</h5>
                        <ul>
                            <li>150 Naira/month per Tag</li>
                            <li>864 Naira/year per Tag (10% discount)</li>
                        </ul>
                    </div>
                </a>
                <a href="/signin" target="_blank" rel="noopener noreferrer" className="package">
                    <div onClick={() => learnMore("Premium")}>
                        <h3>Premium Plan</h3>
                        <h4>₦800/month</h4>
                        <p>Annual Payment (Best Value): 8,640 Naira/year (save 10%)</p>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>All Basic & Standard Plan features</li>
                            <li>Delivery of Items Nationwide</li>
                            <li>Affidavit</li>
                            <li>Regular updates and notifications</li>
                        </ul>
                        <h5>Additional Tags for Naija Saver Plan:</h5>
                        <ul>
                            <li>700 Naira/month per Tag</li>
                            <li>7,560 Naira/year per Tag (10% discount)</li>
                        </ul>
                    </div>
                </a>
                <a href="/signin" target="_blank" rel="noopener noreferrer" className="package">
                    <div onClick={() => learnMore("Standard")}>
                        <h3>Standard Plan</h3>
                        <h4>₦300/month</h4>
                        <p>Annual Payment (Best Value): 3,100 Naira/year (save 10%)</p>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>All Basic Plan features</li>
                            <li>Delivery of Found item Inter-state</li>
                            <li>Priority customer support</li>
                            <li>Enhanced recovery support</li>
                        </ul>
                        <h5>Additional Tags for Naija Saver Plan:</h5>
                        <ul>
                            <li>250 Naira/month per Tag</li>
                            <li>7,560 Naira/year per Tag (10% discount)</li>
                        </ul>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default PricingPackages;
