import React from 'react';

export function useOnlineStatus(callback) {
    const ref = React.useRef();

    React.useEffect(() => {
        const handleClick = (event) => {
            callback();
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return ref;
}
