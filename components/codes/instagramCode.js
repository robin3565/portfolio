const InstaRegexCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false"
            lang="jsx">
            <div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="jsx">
                <div></div>
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer">
                        <div><div class="CodeMirror-lines"><div><div class="CodeMirror-measure"></div>
                            <div class="CodeMirror-measure"></div>
                            <div></div><div class="CodeMirror-code">
                                <div class="CodeMirror-activeline">
                                    <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                    <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter"></div>
                                    <pre class=" CodeMirror-line "><span><span class="cm-comment">{'// AuthSignUp.js'}</span></span></pre>
                                </div>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span>
                                        <span class="cm-keyword">const</span>
                                        <span class="cm-def"> ID_REGEX</span>
                                        <span class="cm-operator"> = </span> <span class="cm-string-2">{'/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i'}</span>;</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span><span class="cm-keyword">const</span> <span class="cm-def">PWD_REGEX</span>
                                        <span class="cm-operator"> = </span> <span class="cm-string-2">{'/^(?=.*?[0-9])(?=.*?[#?!@$ %^&amp;*-]).{8,}$/'}</span>;</span></pre>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div></div>
                    <div class="CodeMirror-gutters"></div>
                </div>
            </div>
        </pre>
    )
}

const InstaPrivateRouteCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded md-focus" spellcheck="false" lang="jsx">
            <div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap CodeMirror-focused" lang="jsx">
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer">
                    <div><div class="CodeMirror-lines">
                        <div><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre>
                        </div>
                            <div class="CodeMirror-measure"></div>
                            <div></div>
                            <div class="CodeMirror-code" role="presentation">
                                <div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span>
                                            <span class="cm-keyword">import</span>{' {'}<span class="cm-def">Navigate</span>,
                                            <span class="cm-def">useLocation</span>{'} '}<span class="cm-keyword">from</span> <span class="cm-string">'react-router-dom'</span></span></pre>
                                </div>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span><span class="cm-keyword">import</span> <span class="cm-def">STATE_KEY</span>
                                        <span class="cm-keyword">from</span> <span class="cm-string">'../components/global/constants'</span>;</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span><span class="cm-keyword">import</span> {<span class="cm-def">getItem</span>} <span class="cm-keyword">from</span> <span class="cm-string">'../components/global/functions'</span>;</span></pre>
                                <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                </span></span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span><span class="cm-keyword">const</span> <span class="cm-def">PrivateRoute</span> <span class="cm-operator"> = </span>
                                        {' ({'}<span class="cm-def">children</span>{'}) '}<span class="cm-operator"> =&gt;</span>{' {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">localState</span>
                                        <span class="cm-operator"> = </span> <span class="cm-variable">getItem</span>(<span class="cm-variable">STATE_KEY</span>{', []);'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">location</span>
                                        <span class="cm-operator">=</span> <span class="cm-variable">useLocation</span>{'();'}</span></pre>
                                <pre class=" CodeMirror-line "><span><span cm-text="" cm-zwsp="">
                                </span></span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">if</span>{' ('}<span class="cm-operator">!</span><span class="cm-variable-2">localState</span>?.
                                        <span class="cm-property">isAuthenticated</span>{') {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-tag cm-bracket">&lt;</span>
                                        <span class="cm-tag">Navigate</span> <span class="cm-attribute">to</span>=<span class="cm-string">"/login"</span> <span class="cm-attribute">state</span>
                                        {'={{ '}<span class="cm-variable">from</span>: <span class="cm-variable">location</span>{' }} '}<span class="cm-attribute">replace</span>
                                        <span class="cm-tag cm-bracket">/&gt;</span>;</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp;{'  }'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">children</span>;</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span>{'}'}</span></pre>
                                <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                </span></span></pre>
                                <div class="CodeMirror-activeline">
                                    <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                    <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                    </div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">export</span> <span class="cm-keyword">default</span> <span class="cm-variable">PrivateRoute</span></span></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </pre >
    )
}

const InstaPortalsCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded md-focus" spellcheck="false"
            lang="jsx"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap CodeMirror-focused" lang="jsx">
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer">
                    <div>
                        <div class="CodeMirror-lines">
                            <div>
                                <div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre>
                                </div>
                                <div class="CodeMirror-measure"></div>
                                <div></div>
                                <div class="CodeMirror-code">
                                    <div class="">
                                        <pre class=" CodeMirror-line "><span><span class="cm-comment">// Portals.js</span></span></pre>
                                    </div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">import</span> <span class="cm-def">ReactDOM</span> <span class="cm-keyword">from</span> <span class="cm-string">'react-dom'</span></span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">const</span> <span class="cm-def">el</span> <span class="cm-operator"> = </span>
                                            <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"modal"</span>);</span></pre>
                                    <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                    </span></span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">const</span> <span class="cm-def">PlusModalPortal</span> <span class="cm-operator"> = </span>
                                            {' ({'}<span class="cm-def">children</span>{'}) '}<span class="cm-operator">=&gt;</span>{' {'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">return&nbsp;</span>
                                            <span class="cm-variable">ReactDOM</span>.
                                            <span class="cm-property">createPortal</span>(<span class="cm-variable-2">children</span>, <span class="cm-variable">el</span>);</span></pre>
                                    <div class="CodeMirror-activeline">
                                        <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                        <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                        </div>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>{'}'};</span></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div></div>
                    <div class="CodeMirror-gutters" ></div>
                </div>
            </div>
        </pre>
    )
}

const InstaSearchCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded md-focus" spellcheck="false"
            lang="jsx"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap CodeMirror-focused" lang="jsx">
                <div>
                </div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer">
                        <div><div class="CodeMirror-lines"><div><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre>
                        </div>
                            <div class="CodeMirror-measure"></div>
                            <div></div>
                            <div class="CodeMirror-code" role="presentation">
                                <div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">const&nbsp;</span>
                                            <span class="cm-def">filterUser</span>
                                            <span class="cm-operator">=</span> (<span class="cm-def">e</span>) <span class="cm-operator">=&gt;</span>{' {'}</span></pre>
                                </div>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-variable">setSearchedId</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">target</span>.<span class="cm-property">value</span>);</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">if</span> (<span class="cm-variable-2">e</span>.
                                        <span class="cm-property">target</span>.<span class="cm-property">value</span> <span class="cm-operator">==</span> <span class="cm-string">""</span>) <span class="cm-variable">setFiltetedId</span>([]);</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">else</span>{' {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">setFiltetedId</span>(<span class="cm-variable">userInfo</span>.<span class="cm-property">filter</span>((<span class="cm-def">user</span>) <span class="cm-operator">=&gt;</span> </span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">user</span>.
                                        <span class="cm-property">id</span>.<span class="cm-property">toLowerCase</span>().<span class="cm-property">includes</span>(<span class="cm-variable">searchedId</span>.<span class="cm-property">toLowerCase</span>())));</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp;{'  }'}</span></pre>
                                <div class="CodeMirror-activeline">
                                    <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                    <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                    </div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span>{'}'}</span></pre>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </pre>
    )
}

const InstaExploreCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded md-focus bg-white" spellcheck="false" lang="jsx">
            <div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap CodeMirror-focused" lang="jsx">
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer"><div><div class="CodeMirror-lines" role="presentation">
                        <div role="presentation"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre>
                        </div>
                            <div class="CodeMirror-measure"></div>
                            <div class="CodeMirror-code" role="presentation">
                                <div class="CodeMirror-activeline">
                                    <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                    <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                    </div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-comment">// Explore.js</span></span></pre>
                                </div>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span><span class="cm-keyword">const</span>
                                        <span class="cm-def">divideData</span> <span class="cm-operator">=</span> (<span class="cm-def">feeds</span>,
                                        <span class="cm-def">length</span>) <span class="cm-operator">=&gt;</span>{' {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">let</span> <span class="cm-def">output</span> <span class="cm-operator">=</span>
                                        <span class="cm-variable">&nbsp;Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable-2">length</span> <span class="cm-operator">%</span>
                                        <span class="cm-number">3</span>);</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">divide</span> <span class="cm-operator">=</span>
                                        <span class="cm-variable">&nbsp;Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable-2">length</span> <span class="cm-operator">/</span>
                                        <span class="cm-number">3</span>) <span class="cm-operator">+</span> (<span class="cm-variable-2">output</span> <span class="cm-operator">&gt;</span>
                                        <span class="cm-number">0</span> <span class="cm-operator">?</span> <span class="cm-number">1</span> : <span class="cm-number">0</span>);</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">if</span> (<span class="cm-variable-2">output</span>
                                        <span class="cm-operator">&gt;</span> <span class="cm-number">0</span>{') {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">for</span> (<span class="cm-keyword">let</span>
                                        <span class="cm-def">&nbsp;i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;
                                        <span class="cm-variable-2">&nbsp;i</span> <span class="cm-operator">&lt;=</span> <span class="cm-variable-2">output</span>;
                                        <span class="cm-variable-2">&nbsp;i</span><span class="cm-operator">++</span>{') {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">feeds</span>.
                                        <span class="cm-property">push</span>(<span class="cm-number">0</span>);</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp;{'  }'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp;{'  }'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">const</span>
                                        <span class="cm-def">&nbsp;newArray</span> <span class="cm-operator">=</span>{' [];'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">i</span>
                                        <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> <span class="cm-operator">&lt;</span>
                                        <span class="cm-variable-2">divide</span>; <span class="cm-variable-2">i</span><span class="cm-operator">++</span>{') {'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">newArray</span>.
                                        <span class="cm-property">push</span>(<span class="cm-variable-2">feeds</span>.<span class="cm-property">splice</span>(
                                        <span class="cm-number">0</span>, <span class="cm-number">3</span>));</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp;{'  }'}</span></pre>
                                <pre class=" CodeMirror-line "
                                    role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">newArray</span>;</span></pre>
                                <div class="">
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span>{'}'}</span></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </pre >
    )
}

export { InstaRegexCode, InstaPrivateRouteCode, InstaPortalsCode, InstaSearchCode, InstaExploreCode }