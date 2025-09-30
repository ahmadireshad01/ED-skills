type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="w-[75px] bg-gray-200 rounded-full h-2 m-auto mt-[57px]">
      <div
        className="bg-red-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
