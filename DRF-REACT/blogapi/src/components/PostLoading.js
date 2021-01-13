import React from 'react';

function PostLoading(component) {
    return function PostLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <component {...props} />;
        return (
            <p style={{ fontSize: '25px' }}>
                we are waiting for the data to load!
            </p>
        );
    };
}
export default PostLoading;