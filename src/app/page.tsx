import React from 'react';
import Main from '@/components/main';
import data from '../../config.json';

export default function Home() {
	return <Main data={data} />;
}
