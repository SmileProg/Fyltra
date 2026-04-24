import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yxvkedyhykhajcivsgal.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dmtlZHloeWtoYWpjaXZzZ2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4OTE3NzksImV4cCI6MjA5MjQ2Nzc3OX0.5KghDy_LrBJzGpxJIca6OzQL_h1NLh7L284BR4Sgeus';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
