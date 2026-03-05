import { supabase } from './supabase';

/** 이메일/비밀번호 회원가입 */
export async function signUp(email, password, name) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
    });
    if (error) throw error;
    return data;
}

/** 이메일/비밀번호 로그인 */
export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

/** 로그아웃 */
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

/** 현재 로그인된 사용자 세션 */
export async function getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
}
