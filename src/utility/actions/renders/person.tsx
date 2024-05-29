import React from "react"

let isHeadTracking = true;

document.addEventListener('mousemove', (event) => {
    if (!isHeadTracking) return;

    const head = document.querySelector('.head') as HTMLElement | null;
    const eyesContainer = document.querySelector('.eyes-position') as HTMLElement | null;
    const neckContainer = document.querySelector('.neck-container') as HTMLElement | null;

    if (!head || !eyesContainer || !neckContainer) return;

    const { left: headLeft, top: headTop, width: headWidth, height: headHeight } = head.getBoundingClientRect();
    const headCenterX = headLeft + headWidth / 2;
    const headCenterY = headTop + headHeight / 2;

    const deltaX = event.clientX - headCenterX;
    const deltaY = event.clientY - headCenterY;

    const maxHeadRotationDegree = 30;
    const headRotationRatio = deltaX / window.innerWidth;
    const headRotationDegree = headRotationRatio * maxHeadRotationDegree * 2;

    const maxNeckRotationDegree = maxHeadRotationDegree / 2;
    const neckRotationDegree = headRotationRatio * maxNeckRotationDegree * 2;

    // Adjust the translation of the head to align with the neck
    const headTranslationX = neckRotationDegree / maxNeckRotationDegree * 5; // Horizontal adjustment
    const headTranslationY = Math.abs(neckRotationDegree / maxNeckRotationDegree) * 2; // Vertical adjustment

    head.style.transform = `translate(${headTranslationX}px, ${headTranslationY}px) rotate(${headRotationDegree}deg)`;
    neckContainer.style.transform = `rotate(${neckRotationDegree}deg)`;

    // Eyes movement remains the same
    const angle = Math.atan2(deltaY, deltaX);
    const movementRadius = Math.min(headWidth, headHeight) / 30;
    const moveX = movementRadius * Math.cos(angle);
    const moveY = movementRadius * Math.sin(angle);
    eyesContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Reset the head and eyes position periodically
setInterval(() => {
    isHeadTracking = false;

    const eyesContainer = document.querySelector('.eyes-position') as HTMLElement | null;
    const neckContainer = document.querySelector('.neck-container') as HTMLElement | null;

    if (eyesContainer) eyesContainer.style.transform = 'translate(0, 0)';
    if (neckContainer) neckContainer.style.transform = 'rotate(0deg)';

    setTimeout(() => {
        isHeadTracking = true;
    }, 500);
}, 10000);



function Person() {
    return (
        <div className="person-container color-bg">
            <div id="person">
                <div className="head">
                    <div className="hair">
                        <span className="hair-center"></span>

                        <span className="hair-left"></span>
                        <span className="hair-right"></span>

                    </div>
                    <div className="eyes-position">
                        {/* <div className="glasses">
                                <span className="line line-left"></span>
                                <span className="line circle circle-left"></span>
                                <span className="line circle circle-right"></span>
                                <span className="line line-right"></span>
                            </div> */}
                        <span className="left-eye eye"></span>
                        <span className="right-eye eye"></span>
                    </div>

                </div>
                <div className="neck-container">
                    <span className="neck"></span>
                    <span className="circle"></span>
                </div>
                <div className="body theme-primary"></div>
            </div>
        </div>
    )
};

export default Person;