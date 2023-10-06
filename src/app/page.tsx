import { MaxWidthWrapper } from '@/components';

export default function Home() {
	return (
		<MaxWidthWrapper className="mt-28 mb-12 sm:mt-40 flex flex-col items-center justify-center text-center">
			<div className="mx-auto mb-4 flex max-2-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
				<p className="textsm font-semibold text-gray-700">Pdf Chat is now public!</p>
			</div>
		</MaxWidthWrapper>
	);
}
