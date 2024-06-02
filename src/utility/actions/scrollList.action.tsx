// import React, { useEffect, useRef } from "react";

// interface ScrollListProps {
//     listRef: React.RefObject<HTMLUListElement>;
// }

// const ScrollList: React.FC<ScrollListProps> = ({ listRef }) => {
//     const scrollTimeout = useRef<number | null>(null);

//     const scrollToItem = (index: number) => {
//         if (listRef.current) {
//             const items = listRef.current.children;
//             if (index >= 0 && index < items.length) {
//                 const targetItem = items[index] as HTMLElement;
//                 targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             }
//         }
//     };

//     const scrollUp = () => {
//         if (listRef.current) {
//             console.log('Scrolling up');
//             const items = listRef.current.children;
//             const currentScroll = listRef.current.scrollTop;
//             for (let i = items.length - 1; i >= 0; i--) {
//                 const item = items[i] as HTMLElement;
//                 if (item.offsetTop < currentScroll) {
//                     scrollToItem(i);
//                     break;
//                 }
//             }
//         }
//     };

//     const scrollDown = () => {
//         if (listRef.current) {
//             console.log('Scrolling down');
//             const items = listRef.current.children;
//             const currentScroll = listRef.current.scrollTop;
//             for (let i = 0; i < items.length; i++) {
//                 const item = items[i] as HTMLElement;
//                 if (item.offsetTop > currentScroll) {
//                     scrollToItem(i);
//                     break;
//                 }
//             }
//         }
//     };

//     useEffect(() => {
//         const handleWheel = (event: WheelEvent) => {
//             if (scrollTimeout.current !== null) {
//                 window.clearTimeout(scrollTimeout.current);
//             }

//             scrollTimeout.current = window.setTimeout(() => {
//                 if (event.deltaY > 0) {
//                     scrollDown();
//                 } else {
//                     scrollUp();
//                 }
//             }, 100); // Adjust the delay time as needed
//         };

//         const scrollContainer = listRef.current;
//         if (scrollContainer) {
//             scrollContainer.addEventListener('wheel', handleWheel);
//         }

//         return () => {
//             if (scrollContainer) {
//                 scrollContainer.removeEventListener('wheel', handleWheel);
//             }
//             if (scrollTimeout.current !== null) {
//                 window.clearTimeout(scrollTimeout.current);
//             }
//         };
//     }, [listRef]);

//     return (
//         <div className="scroll-buttons">
//             <button onClick={scrollUp}>Scroll Up</button>
//             <button onClick={scrollDown}>Scroll Down</button>
//         </div>
//     );
// };

// export default ScrollList;

import React from "react";

interface ScrollListProps {
    listRef: React.RefObject<HTMLUListElement>;
}

const ScrollList: React.FC<ScrollListProps> = ({ listRef }) => {
    const scrollToItem = (index: number) => {
        if (listRef.current) {
            const items = listRef.current.children;
            if (index >= 0 && index < items.length) {
                const targetItem = items[index] as HTMLElement;
                targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const scrollUp = () => {
        if (listRef.current) {
            console.log('Scrolling up');
            const items = listRef.current.children;
            const currentScroll = listRef.current.scrollTop;
            for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i] as HTMLElement;
                if (item.offsetTop < currentScroll) {
                    scrollToItem(i);
                    break;
                }
            }
        }
    };

    const scrollDown = () => {
        if (listRef.current) {
            console.log('Scrolling down');
            const items = listRef.current.children;
            const currentScroll = listRef.current.scrollTop;
            for (let i = 0; i < items.length; i++) {
                const item = items[i] as HTMLElement;
                if (item.offsetTop > currentScroll) {
                    scrollToItem(i);
                    break;
                }
            }
        }
    };

    return (
        <div className="scroll-buttons">
            <button onClick={scrollUp}>Scroll Up</button>
            <button onClick={scrollDown}>Scroll Down</button>
        </div>
    );
};

export default ScrollList;
