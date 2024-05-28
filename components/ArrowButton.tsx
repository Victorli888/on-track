export const ArrowButton = ({ onClick, isLeft }: { onClick: () => void, isLeft: boolean  }) => (
    <button onClick={onClick}>
        <img
            className="my-6"
            src="/right-arrow.svg"
            style={isLeft ? {transform: 'scaleX(-1)'} : {}}
            width="64"
            height="64"
            alt={"Arrow"}
        />
    </button>
);