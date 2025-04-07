import React, { useState, useRef, useEffect } from "react";

// Error Boundary Component (unchanged)
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="text-red-500 p-4">Something went wrong with the video player. Please refresh the page.</div>;
        }
        return this.props.children;
    }
}

// VideoCard Component (unchanged except for ref addition)
const VideoCard = ({ videoId, title, subject, description, isActive, playerRef, onPlayerReady, cardRef }) => {
    const iframeRef = useRef(null);
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    useEffect(() => {
        let player = null;
        
        const initPlayer = () => {
            if (!window.YT?.Player || !iframeRef.current) {
                console.warn('YouTube API or iframe not ready for video:', videoId);
                return null;
            }

            try {
                player = new window.YT.Player(iframeRef.current, {
                    videoId: videoId,
                    playerVars: {
                        autoplay: 0,
                        mute: 1,
                        controls: 1,
                        rel: 0,
                    },
                    events: {
                        onReady: (event) => {
                            if (event?.target && onPlayerReady) {
                                setIsPlayerReady(true);
                                onPlayerReady(event.target, videoId);
                            }
                        },
                        onError: (error) => console.error('YouTube Player Error:', error)
                    }
                });
                return player;
            } catch (error) {
                console.error('Failed to initialize YouTube player:', error);
                return null;
            }
        };

        if (window.YT?.Player) {
            player = initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = () => {
                player = initPlayer();
            };
        }

        return () => {
            if (player?.destroy) {
                player.destroy();
            }
            if (playerRef.current?.[videoId]) {
                delete playerRef.current[videoId];
            }
        };
    }, [videoId, onPlayerReady]);

    useEffect(() => {
        const handlePlayerState = () => {
            const player = playerRef.current?.[videoId];
            if (!player || !isPlayerReady) return;

            try {
                if (isActive) {
                    player.playVideo?.();
                    player.unMute?.();
                } else {
                    player.pauseVideo?.();
                    player.mute?.();
                }
            } catch (error) {
                console.error('Error controlling player state:', error);
            }
        };

        const timeoutId = setTimeout(handlePlayerState, 500);
        return () => clearTimeout(timeoutId);
    }, [isActive, videoId, playerRef, isPlayerReady]);

    return (
        <div ref={cardRef} className="bg-white flex flex-col items-start justify-start pt-2.5 px-2.5 pb-[14.4px] box-border gap-[15.9px] shrink-0 text-left text-sm text-gray-600 font-inter w-[calc(40% - 20px)] min-w-[300px] sm:min-w-[200px] xl:max-w-5xl">
            <div className="self-stretch h-[221.2px] relative rounded-lg w-full overflow-hidden shrink-0">
                <div id={`youtube-player-${videoId}`} ref={iframeRef} className="w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2.4px] w-full">
                <div className="relative leading-[19px] font-medium">{title}</div>
                <div className="relative leading-[19px] text-gray-500 text-xs mt-1">{description}</div>
                <div className="flex flex-row items-start justify-start [row-gap:20px] mt-2 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <span className="relative leading-[22.4px] inline-block min-w-[78.9px] shrink-0">IIT-JEE</span>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 px-0 text-base">
                        <b className="ml-[-0.2px] relative inline-block min-w-[115.4px] shrink-0">{subject}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section7 Component (updated)
const Section7 = ({ className = "" }) => {
    const [activeTab, setActiveTab] = useState('Make Concepts Clear');
    const sectionRef = useRef(null);
    const playerRef = useRef({});
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const [activeVideoId, setActiveVideoId] = useState(null);
    const videoRefs = useRef({});

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    // Observer for section visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionVisible(entry.isIntersecting);
                
                if (!entry.isIntersecting && playerRef.current) {
                    Object.values(playerRef.current).forEach(player => {
                        try {
                            player?.pauseVideo?.();
                            player?.mute?.();
                        } catch (error) {
                            console.error('Error pausing video:', error);
                        }
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Observer for individual video cards
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const videoId = entry.target.dataset.videoId;
                    if (entry.isIntersecting && isSectionVisible && videoId !== activeVideoId) {
                        setActiveVideoId(videoId);
                    }
                });
            },
            { threshold: 0.7 } // Trigger when 70% of the video card is visible
        );

        Object.values(videoRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            Object.values(videoRefs.current).forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [activeTab, isSectionVisible]);

    // Set first video as active on tab change
    useEffect(() => {
        if (contentMap[activeTab]?.length > 0) {
            const firstVideoId = contentMap[activeTab][0].videoId;
            setActiveVideoId(firstVideoId);

            const timeoutId = setTimeout(() => {
                if (!isSectionVisible || !playerRef.current) return;

                Object.values(playerRef.current).forEach(player => {
                    try {
                        player?.pauseVideo?.();
                        player?.mute?.();
                    } catch (error) {
                        console.error('Error pausing video on tab change:', error);
                    }
                });

                if (playerRef.current[firstVideoId] && isSectionVisible) {
                    try {
                        playerRef.current[firstVideoId].playVideo?.();
                        playerRef.current[firstVideoId].unMute?.();
                    } catch (error) {
                        console.error('Error playing first video:', error);
                    }
                }
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    }, [activeTab, isSectionVisible]);

    const handlePlayerReady = (player, videoId) => {
        if (!playerRef.current) playerRef.current = {};
        playerRef.current[videoId] = player;
        
        try {
            if (videoId === activeVideoId && isSectionVisible) {
                player?.playVideo?.();
                player?.unMute?.();
            } else {
                player?.pauseVideo?.();
                player?.mute?.();
            }
        } catch (error) {
            console.error('Error in handlePlayerReady:', error);
        }
    };

    const navItems = [
        "Make Concepts Clear",
        "Learn Formulas",
        "Revise Basic Concepts",
        "Challenges"
    ];

    const contentMap = {
        "Make Concepts Clear": [
            {
                videoId: "ZWzLF1ZoW28",
                title: "JEE Main Physics Concepts Explained",
                description: "Complete understanding of mechanics concepts with detailed explanations and examples",
                subject: "Physics"
            },
            {
                videoId: "0ETZ8Qhq3v8",
                title: "Organic Chemistry Fundamentals",
                description: "Master organic chemistry reactions and mechanisms for JEE preparation",
                subject: "Chemistry"
            },
            {
                videoId: "mRCXh__pexQ",
                title: "Calculus Mastery for JEE",
                description: "Essential calculus concepts explained with solved examples for JEE Main & Advanced",
                subject: "Maths"
            }
        ],
        "Learn Formulas": [
            {
                videoId: "AR23uxZruhE",
                title: "Physics Formula Derivations",
                description: "Quick revision of important physics formulas with their applications",
                subject: "Physics"
            },
            {
                videoId: "Ot5iY2A1zXA",
                title: "Chemistry Formula Sheet",
                description: "Complete formula handbook for JEE chemistry with tricks to remember",
                subject: "Chemistry"
            },
            {
                videoId: "iiFjUNepEvU",
                title: "Mathematical Shortcuts",
                description: "Time-saving mathematical formulas and techniques for competitive exams",
                subject: "Maths"
            }
        ],
        "Revise Basic Concepts": [
            {
                videoId: "ads35RKD618",
                title: "Physics One-Shot Revision",
                description: "Complete physics syllabus revision in one video with important concepts",
                subject: "Physics"
            },
            {
                videoId: "rIj8YJGJ3X4",
                title: "Chemistry Basic Concepts",
                description: "Fundamental chemistry concepts explained with visual examples",
                subject: "Chemistry"
            },
            {
                videoId: "gbqMYmor_rE",
                title: "Mathematics Foundation",
                description: "Strong foundation building for JEE mathematics with solved examples",
                subject: "Maths"
            }
        ],
        "Challenges": [
            {
                videoId: "cdTnnZRGZkk",
                title: "Advanced Physics Problems",
                description: "Challenging physics problems with detailed solutions for JEE Advanced",
                subject: "Physics"
            },
            {
                videoId: "wlDMhAb97YI",
                title: "Chemistry Problem Solving",
                description: "Complex chemistry numerical and theoretical problems solved step by step",
                subject: "Chemistry"
            },
            {
                videoId: "mgnDsXUW5Rw",
                title: "JEE Advanced Mathematics",
                description: "Advanced level mathematics problems with expert solutions",
                subject: "Maths"
            }
        ]
    };

    return (
        <ErrorBoundary>
            <div ref={sectionRef} className={`
                self-stretch 
                bg-whitesmoke-100 
                flex 
                flex-col 
                items-center 
                -ml-[10px]
                justify-start 
                py-10
                box-border 
                shrink-0 
                text-left 
                text-xs 
                text-darkgray-100 
                font-inter 
                relative 
                px-[5%]
                mq1400:px-[14%]
                mq925:px-5
                mq450:px-5
                mq450:w-full
                mq925:w-full
                mq1400:max-w-full
                ${className}
            `}>
                <div className="w-full max-w-[calc(100% - 12cm)] sm:max-w-6xl mx-auto sm:pl-[20%] sm:py-8">
                    <div className="flex flex-row items-start justify-start gap-2.5 mb-4">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img className="w-3.5 h-3.5 relative overflow-hidden shrink-0 top-[16px]" alt="" src="/starsvg.svg" />
                        </div>
                        <div className="relative tracking-[1px] uppercase top-[16px] right-[4px] font-sf-pro-bold">IIT-JEE Revision Techniques</div>
                    </div>
                    
                    <div className="flex flex-col gap-[18.7px] max-w-full text-11xl text-black">
                        <div className="flex flex-row items-start justify-start max-w-full gap-4">
                            <h1 className="m-0 relative text-inherit leading-[39px] font-bold font-sf-pro-bold">Knowledge</h1>
                            <div className="relative">
                                <h1 className="m-0 absolute w-[180px] top-0 left-0 text-inherit leading-[39px] font-bold font-sf-pro-bold">from NNIIT</h1>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 w-full">
                                <div className="w-full sm:w-1/4">
                                    <div className="flex-1 sm:hidden">
                                        <div className="flex-1 flex justify-start space-x-3 sm:space-x-4 md:space-x-8 text-white font-sf-pro-bold 
                                            overflow-x-auto scrollbar-hide px-2 bg-gray-600 rounded-lg mx-0 py-2 h-6">
                                            {navItems.map((item) => (
                                                <div
                                                    key={item}
                                                    className={`relative capitalize font-medium font-sf-pro-regular text-sm cursor-pointer whitespace-nowrap px-2 py-1
                                                        ${activeTab === item
                                                            ? "bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
                                                            : "text-white hover:text-gray-300"
                                                        } transition-colors duration-300`}
                                                    onClick={() => setActiveTab(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="hidden sm:flex sm:flex-col">
                                        {navItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`flex flex-row items-center gap-3 py-4 border-b border-gainsboro-200 group cursor-pointer
                                                    ${activeTab === item ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                                                onClick={() => setActiveTab(item)}
                                            >
                                                <img
                                                    className="h-[23px] w-[23px] relative overflow-hidden shrink-0 object-cover group-hover:opacity-100"
                                                    alt=""
                                                    src="/gradientblacksvg@2x.png"
                                                />
                                                <b className={`text-sm font-sf-pro-regular leading-[22.4px]
                                                    ${activeTab === item 
                                                        ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                                                        : 'text-gray-600'}`}>
                                                    {item}
                                                </b>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-row gap-6 sm:gap-3 overflow-x-auto font-sf-pro-medium scroll-smooth hide-scrollbar w-full 
                                        sm:max-w-[30%] sm:-ml-[4%] 
                                        md:max-w-[70%] md:-ml-[5%] 
                                        lg:max-w-[70%] lg:-ml-[5%] 
                                        xl:max-w-[70%] xl:-ml-[5%]
                                        xs:max-w-[100%] xs:pr-8">
                                        {contentMap[activeTab].map((content, index) => (
                                            <div 
                                                key={index} 
                                                className="w-[85%] sm:min-w-0 flex-shrink-0"
                                                data-video-id={content.videoId}
                                                ref={el => videoRefs.current[content.videoId] = el}
                                            >
                                                <VideoCard 
                                                    {...content} 
                                                    isActive={content.videoId === activeVideoId && isSectionVisible}
                                                    playerRef={playerRef}
                                                    onPlayerReady={handlePlayerReady}
                                                    cardRef={el => videoRefs.current[content.videoId] = el}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default Section7;