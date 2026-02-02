"use client";

import { useScramble } from "use-scramble";

type NameProps = {
	text: string;
	className?: string;
	speed?: number;
	tick?: number;
	step?: number;
	scramble?: number;
	seed?: number;
};

export function Name({
	text,
	className,
	speed = 0.5,
	tick = 1,
	step = 1,
	scramble = 5,
	seed = 3,
}: NameProps) {
	const { ref } = useScramble({
		text,
		speed,
		tick,
		step,
		scramble,
		seed,
		overdrive: true,
	});

	return <span ref={ref} className={className} />;
}
