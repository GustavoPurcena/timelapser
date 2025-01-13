export type User = {
  id: string;
  email: string;
  created_at: string;
};

export type TimeLapse = {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  status: 'active' | 'paused' | 'completed';
  interval_minutes: number;
  created_at: string;
  updated_at: string;
};

export type Photo = {
  id: string;
  timelapse_id: string;
  url: string;
  thumbnail_url: string;
  taken_at: string;
  storage_path: string;
};

export type TimeLapseSettings = {
  resolution: {
    width: number;
    height: number;
  };
  quality: number; // 0-1
  compression: boolean;
};

// Supabase Database Types
export type Database = {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, 'created_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at'>>;
      };
      timelapses: {
        Row: TimeLapse;
        Insert: Omit<TimeLapse, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<TimeLapse, 'id' | 'created_at' | 'updated_at'>>;
      };
      photos: {
        Row: Photo;
        Insert: Omit<Photo, 'id' | 'taken_at'>;
        Update: Partial<Omit<Photo, 'id' | 'taken_at'>>;
      };
    };
  };
};