import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
    "https://ihznhwnfmvstrzgzfnvx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imloem5od25mbXZzdHJ6Z3pmbnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NjM1NzcsImV4cCI6MjA1MTEzOTU3N30.zKfCNmo_AYDssR_b6ydYcst5dDohP_5Gj3V4p65VXGQ"
    )