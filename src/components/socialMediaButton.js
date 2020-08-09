import React from 'react';

function SocialMediaButton({ at = '', icon = null, url = '/' }) {
    return (
        <div style={{ textAlign: 'center', margin: '0 1em' }}>
            <div style={{ width: '4px', height: '20px', backgroundColor: 'white', borderRadius: '4px', margin: '0 auto -3px' }} />
            <a href={url} target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'white', borderRadius: '50%', padding: '4px', margin: '0 auto' }} >
                    {icon ? <img style={{ height: '42px', width: '42px' }} src={icon} alt={at} /> : null}
                </div>
                <span style={{ fontWeight: 'lighter', fontSize: '15px', color: 'rgba(255,255,255,.5)' }}>@{at}</span>
            </a>
        </div>
    );
}

export default SocialMediaButton;
