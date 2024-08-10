import React from 'react'
import ContentLoader from 'react-content-loader'


export default function Skeleton(props) {
	return (
		<ContentLoader 
		viewBox="0 0 1300 510" 
		height={500}
		foregroundColor="#e9f2bd" 
		backgroundColor='#a4ab85'
		{...props}>
      <rect x="0" y="10" rx="10" ry="10" width="500" height="500" />
      <rect x="770" y="10" rx="15" ry="15" width="150" height="25" />
      <rect x="770" y="58" rx="12" ry="12" width="100" height="25" />
      <rect x="770" y="108" rx="5" ry="5" width="500" height="10" />
      <rect x="770" y="125" rx="5" ry="5" width="500" height="10" />
      {/* <rect x="870" y="99" rx="0" ry="0" width="70" height="30" />
      <rect x="770" y="99" rx="0" ry="0" width="70" height="30" /> */}
    </ContentLoader>
	)
}
