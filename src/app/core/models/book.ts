export interface Book{
    createdAt: Date;
    name: string;
    isFvorite: boolean;
    id: number;
    imageUrl: string;
    description: string;
    categoryId: number;
    category: string;
}