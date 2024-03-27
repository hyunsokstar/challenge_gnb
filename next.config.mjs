// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: ['styles'], // 필요에 따라 경로 조정
    },
};

export default nextConfig;
