export interface HelpSharingCardConfig {
    authorname: string;
    authorRole: string;
    time?: string;
    title: string;
    content: string;
    upVoteCount?: number;
    downVoteCount?: number;
    commentCount?: number;
    answersCount?: number;
    showFullText?: boolean;
    hideUpvote?: boolean;
    hideDownvote?: boolean;
    hideAnswersCount?: boolean;
}
