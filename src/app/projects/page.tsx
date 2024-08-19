import React from 'react';
import data from '../../../config.json';
import Projects from '@/components/projects';

export default function Home() {
	return <Projects data={data} />;
}
