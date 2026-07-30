// ── CAVoice Authentication Module ────────────────────────────────────────────
(function () {
  'use strict';

  // ── ACCOUNTS ───────────────────────────────────────────────────────────────
  const ACCOUNTS = {
    'CV-2841': {
      name: 'Lemon', nameZh: 'Lemon',
      program: 'Beginner', programZh: '基础班',
      sessionsCompleted: 12, totalSessions: 20,
      certificateFile: 'CV-2841.pdf',
      achievements: [
        { icon: '📚', title: 'Week 1 Module',   titleZh: '第一周模块', desc: 'Daily Speaking: Introductions, Canadian school life & community', descZh: '日常口语——自我介绍、加拿大学校生活与社区', unlocked: true  },
        { icon: '🏫', title: 'Week 2 Module',   titleZh: '第二周模块', desc: 'Real Canadian Classroom: Show & Tell, group projects & mini presentation', descZh: '真实加拿大课堂——展示与讲述、小组项目与迷你演讲', unlocked: true  },
        { icon: '🍁', title: 'Week 3 Module',   titleZh: '第三周模块', desc: 'Canadian Culture: Holidays, animals, food & national spirit', descZh: '加拿大文化——节日、动物、食物与国民精神', unlocked: true },
        { icon: '🎤', title: 'Week 4 Module',   titleZh: '第四周模块', desc: 'Public Speaking Basics: Clarity, storytelling, opinions & final showcase', descZh: '演讲基础——清晰表达、讲故事、观点表达与结业展示', unlocked: true },
        { icon: '🗓️', title: 'Perfect Week',    titleZh: '全勤周',     desc: 'Attended all 5 sessions in one week', descZh: '一周内出席全部5节课', unlocked: true  },
        { icon: '🎙️', title: 'First Presentation', titleZh: '首次演讲', desc: 'Delivered your first class presentation', descZh: '完成第一次课堂演讲', unlocked: true  },
      ]
    },
    'CV-5739': {
      name: 'Gia', nameZh: 'Gia',
      program: 'Beginner', programZh: '基础班',
      sessionsCompleted: 8, totalSessions: 20,
      certificateFile: 'CV-5739.pdf',
      achievements: [
        { icon: '📚', title: 'Week 1 Module',   titleZh: '第一周模块', desc: 'Daily Speaking: Introductions, Canadian school life & community', descZh: '日常口语——自我介绍、加拿大学校生活与社区', unlocked: true  },
        { icon: '🏫', title: 'Week 2 Module',   titleZh: '第二周模块', desc: 'Real Canadian Classroom: Show & Tell, group projects & mini presentation', descZh: '真实加拿大课堂——展示与讲述、小组项目与迷你演讲', unlocked: true  },
        { icon: '🍁', title: 'Week 3 Module',   titleZh: '第三周模块', desc: 'Canadian Culture:  Holidays, animals, food & national spirit', descZh: '加拿大文化——节日、动物、食物与国民精神', unlocked: true },
        { icon: '🎤', title: 'Week 4 Module',   titleZh: '第四周模块', desc: 'Public Speaking Basics: Clarity, storytelling, opinions & final showcase', descZh: '演讲基础——清晰表达、讲故事、观点表达与结业展示', unlocked: true },
        { icon: '🗓️', title: 'Perfect Week',    titleZh: '全勤周',     desc: 'Attended all 5 sessions in one week', descZh: '一周内出席全部5节课', unlocked: true  },
        { icon: '🎙️', title: 'First Presentation', titleZh: '首次演讲', desc: 'Delivered your first class presentation', descZh: '完成第一次课堂演讲', unlocked: true  },      
      ]
      },
    'CV-3067': {
      name: 'Allen', nameZh: 'Allen',
      program: 'Beginner', programZh: '基础班',
      sessionsCompleted: 5, totalSessions: 20,
      certificateFile: 'CV-3067.pdf',
      achievements: [
        { icon: '📚', title: 'Week 1 Module',   titleZh: '第一周模块', desc: 'Daily Speaking: Introductions, Canadian school life & community', descZh: '日常口语——自我介绍、加拿大学校生活与社区', unlocked: true  },
        { icon: '🏫', title: 'Week 2 Module',   titleZh: '第二周模块', desc: 'Real Canadian Classroom: Show & Tell, group projects & mini presentation', descZh: '真实加拿大课堂——展示与讲述、小组项目与迷你演讲', unlocked: true },
        { icon: '🍁', title: 'Week 3 Module',   titleZh: '第三周模块', desc: 'Canadian Culture: Holidays, animals, food & national spirit', descZh: '加拿大文化——节日、动物、食物与国民精神', unlocked: true },
        { icon: '🎤', title: 'Week 4 Module',   titleZh: '第四周模块', desc: 'Public Speaking Basics: Clarity, storytelling, opinions & final showcase', descZh: '演讲基础——清晰表达、讲故事、观点表达与结业展示', unlocked: true },
        { icon: '🗓️', title: 'Perfect Week',    titleZh: '全勤周',     desc: 'Attended all 5 sessions in one week', descZh: '一周内出席全部5节课', unlocked: false  },
        { icon: '🎙️', title: 'First Presentation', titleZh: '首次演讲', desc: 'Delivered your first class presentation', descZh: '完成第一次课堂演讲', unlocked: true  },
      ]
    },
  };

  // ── HELPERS ────────────────────────────────────────────────────────────────
  function getUser() {
    const id = localStorage.getItem('cavoice_id');
    return (id && ACCOUNTS[id]) ? { id, ...ACCOUNTS[id] } : null;
  }
  function doLogin(id) {
    const clean = id.trim().toUpperCase();
    if (ACCOUNTS[clean]) { localStorage.setItem('cavoice_id', clean); return true; }
    return false;
  }
  function doLogout() { localStorage.removeItem('cavoice_id'); location.reload(); }

  // ── INJECT CSS ─────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .auth-login-btn{background:var(--off,#F7F9FC);color:var(--navy,#1A2B4A);border:2px solid #E8EFF8;padding:7px 14px;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:.78rem;cursor:pointer;transition:all .18s;white-space:nowrap}
    .auth-login-btn:hover{border-color:var(--sky,#4FC3F7);background:#E8F7FF}
    .auth-user-pill{display:flex;align-items:center;gap:6px;background:var(--off,#F7F9FC);border:2px solid #E8EFF8;border-radius:999px;padding:4px 10px 4px 4px}
    .auth-avatar{width:26px;height:26px;border-radius:50%;background:var(--sun,#FFD23F);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:900;color:var(--navy,#1A2B4A);flex-shrink:0;cursor:default}
    .auth-logout-btn{background:none;border:none;cursor:pointer;font-size:.72rem;font-weight:800;color:var(--muted,#7A8BAA);padding:0;transition:color .15s;font-family:'Nunito',sans-serif;white-space:nowrap}
    .auth-logout-btn:hover{color:var(--coral,#FF6B6B)}
    .auth-logged-in .nav-links a{font-size:.8rem}
    .auth-ach-link{color:var(--coral,#FF6B6B)!important;font-weight:800!important;white-space:nowrap}
    .auth-ach-link.current{color:var(--coral,#FF6B6B)!important}

    /* overlay */
    .auth-overlay{position:fixed;inset:0;z-index:9999;background:rgba(26,43,74,.6);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .2s}
    .auth-overlay.open{opacity:1;pointer-events:all}
    .auth-modal{background:white;border-radius:20px;padding:48px 44px;width:100%;max-width:420px;box-shadow:0 24px 80px rgba(26,43,74,.25);text-align:center;transform:translateY(18px);transition:transform .25s;position:relative}
    .auth-overlay.open .auth-modal{transform:translateY(0)}
    .auth-modal-logo{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:24px;font-size:1.3rem;font-weight:900}
    .auth-modal-logo svg{width:38px;height:38px}
    .auth-modal h2{font-size:1.35rem;font-weight:900;color:#1A2B4A;margin-bottom:8px;font-family:'Nunito',sans-serif}
    .auth-modal p{font-size:.9rem;color:#7A8BAA;line-height:1.6;margin-bottom:28px;font-family:'Nunito',sans-serif}
    .auth-input{width:100%;padding:14px 18px;border:2.5px solid #E8EFF8;border-radius:12px;font-family:'Nunito',sans-serif;font-size:1.1rem;font-weight:800;color:#1A2B4A;background:#F7F9FC;text-align:center;letter-spacing:.14em;transition:border-color .18s;outline:none;box-sizing:border-box}
    .auth-input:focus{border-color:#4FC3F7;background:white}
    .auth-input.shake{animation:authshake .3s}
    @keyframes authshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
    .auth-error{font-size:.8rem;font-weight:700;color:#FF6B6B;height:20px;margin:8px 0 14px;font-family:'Nunito',sans-serif}
    .auth-submit{width:100%;padding:14px;background:#1A2B4A;color:white;border:none;border-radius:999px;font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;cursor:pointer;transition:background .18s,transform .15s}
    .auth-submit:hover{background:#2C3F63;transform:translateY(-1px)}
    .auth-close-x{position:absolute;top:14px;right:18px;background:none;border:none;cursor:pointer;font-size:1.1rem;color:#7A8BAA;line-height:1;padding:4px}
    .auth-close-x:hover{color:#1A2B4A}
  `;
  document.head.appendChild(style);

  // ── MODAL ──────────────────────────────────────────────────────────────────
  const overlay = document.createElement('div');
  overlay.className = 'auth-overlay';
  overlay.innerHTML = `
    <div class="auth-modal">
      <button class="auth-close-x" id="auth-close">✕</button>
      <div class="auth-modal-logo">
        <svg viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="#FFD23F"/><path d="M22 6L25.5 18.5L38 22L25.5 25.5L22 38L18.5 25.5L6 22L18.5 18.5Z" fill="#1A2B4A"/></svg>
        <span><span style="color:#1A2B4A">CA</span><span style="color:#FFD23F">Voice</span></span>
      </div>
      <h2>Student Login</h2>
      <p>Enter your Student ID to view your profile and achievements.</p>
      <input class="auth-input" id="auth-input" type="text" placeholder="CV-0000" maxlength="10" autocomplete="off" spellcheck="false"/>
      <div class="auth-error" id="auth-error"></div>
      <button class="auth-submit" id="auth-submit">Sign In</button>
    </div>`;
  document.body.appendChild(overlay);

  const openModal  = () => { overlay.classList.add('open');    setTimeout(() => document.getElementById('auth-input').focus(), 60); };
  const closeModal = () => { overlay.classList.remove('open'); };

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.getElementById('auth-close').addEventListener('click', closeModal);

  function tryLogin() {
    const inp = document.getElementById('auth-input');
    const err = document.getElementById('auth-error');
    if (doLogin(inp.value)) { closeModal(); location.reload(); }
    else {
      inp.classList.add('shake');
      err.textContent = 'Invalid ID — please check and try again.';
      setTimeout(() => { inp.classList.remove('shake'); err.textContent = ''; }, 2000);
    }
  }
  document.getElementById('auth-submit').addEventListener('click', tryLogin);
  document.getElementById('auth-input').addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); });

  // ── NAV ────────────────────────────────────────────────────────────────────
  function initNav() {
    const navRight  = document.querySelector('.nav-right');
    const navLinks  = document.querySelector('.nav-links');
    const wechatBtn = navRight && navRight.querySelector('.nav-cta');
    const user = getUser();
    const isAchPage = location.pathname.includes('achievements');

    if (!user) {
      const btn = document.createElement('button');
      btn.className  = 'auth-login-btn';
      btn.textContent = '🔐 Login';
      btn.addEventListener('click', openModal);
      if (navRight && wechatBtn) navRight.insertBefore(btn, wechatBtn);
    } else {
      // mark body so CSS can tighten nav
      document.body.classList.add('auth-logged-in');

      // compact pill: avatar initials + Logout only (name shown as tooltip)
      const initials = user.name.split(' ').map(n => n[0]).join('');
      const pill = document.createElement('div');
      pill.className = 'auth-user-pill';
      pill.innerHTML = `<div class="auth-avatar" title="${user.name}">${initials}</div><button class="auth-logout-btn" id="auth-logout-btn">Logout</button>`;
      if (navRight && wechatBtn) navRight.insertBefore(pill, wechatBtn);
      document.getElementById('auth-logout-btn').addEventListener('click', doLogout);

      // achievements link — short label to save space
      if (navLinks) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="achievements.html" class="auth-ach-link${isAchPage ? ' current' : ''}">⭐ Badges</a>`;
        navLinks.appendChild(li);
      }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav);
  else initNav();

  // expose for achievements page
  window.CAVoiceAuth = { getUser, doLogout, ACCOUNTS };
}());
