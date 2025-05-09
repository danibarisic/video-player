import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Video = {
    id: number;
    title: string;
    url: string;
    views: number;
    likes: number;
};

const sampleVideo: Video = {
    id: 1,
    title: "Burning Fire",
    url: "/videos/burningfirecomp.mp4", // put your video in `public/videos/`
    views: 1203,
    likes: 103,
};

export const VideoPlayer = () => {
    const [video, setVideo] = useState(sampleVideo);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        // Simulate view increment
        setVideo((v) => ({ ...v, views: v.views + 1 }));
    }, []);

    const handleLike = () => {
        if (!liked) {
            setVideo((v) => ({ ...v, likes: v.likes + 1 }));
            setLiked(true);
        }
    };
    return (
        <Card className="max-w-xl mx-auto">
            <CardHeader>
                <h2 className="text-xl font-semibold">{video.title}</h2>
            </CardHeader>
            <CardContent>
                <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="300px"
                    controls
                />
                <div className="mt-4 flex justify-between items-center">
                    <span>👁 {video.views} views</span>
                    <Button onClick={handleLike} disabled={liked}>
                        ❤️ {video.likes} Likes
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
