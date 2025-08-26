interface ProgressBarProps {
    progress: number;
    backgroundColorVar?: string;
    foregroundColorVar?: string;
}
const ProgressBar = ({progress, backgroundColorVar = "--color-light-1", foregroundColorVar ="--color-primary"} : ProgressBarProps) => {
    return (
        <div className={"text-dark-2 text-xs text-center font-semibold rounded-default"}
           style={{background: `linear-gradient(90deg,var(${foregroundColorVar}) 0%, var(${foregroundColorVar}) ${progress}%, var(${backgroundColorVar}) ${progress}%, var(${backgroundColorVar}) 100%)`}}>
            {progress}% Completed
        </div>
    );
};

export default ProgressBar;