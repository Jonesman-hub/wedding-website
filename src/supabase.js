import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tjotrmjpxdbhyxtftftc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqb3RybWpweGRiaHl4dGZ0ZnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MTM0MDgsImV4cCI6MjA1NTE4OTQwOH0.UZiEjbEsVREvd0eb1wm_XaG9ZFbXOiaSXiS12DmfYI8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
