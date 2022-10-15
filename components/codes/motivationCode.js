const MotiLocalStorageCode = () => {
    return (
        <pre className="md-fences md-end-block ty-contain-cm modeLoaded" spellCheck="false" lang="javascript">
            <div className="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="javascript">
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer">
                        <div>
                            <div class="CodeMirror-lines" role="presentation">
                                <div role="presentation">
                                    <div class="CodeMirror-measure">
                                        <pre><span>xxxxxxxxxx</span></pre>
                                    </div>
                                    <div class="CodeMirror-measure"></div>
                                    <div></div>
                                    <div class="CodeMirror-code" role="presentation">
                                        <div class="CodeMirror-activeline">
                                            <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                            <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                            </div>
                                            <pre class=" CodeMirror-line "><span><span class="cm-keyword">export</span> <span class="cm-keyword">const</span> <span class="cm-def">setItem</span> <span class="cm-operator">=</span> (<span class="cm-def">key</span>, <span class="cm-def">value</span>) <span class="cm-operator">=&gt;</span> {' {'}</span></pre>
                                        </div>
                                        <pre class="CodeMirror-line"><span> &nbsp; &nbsp;<span class="cm-keyword">try</span>{'{'}</span></pre>
                                        <pre class="CodeMirror-line"
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">localStorage</span>.<span class="cm-property">setItem</span>(<span class="cm-variable-2">key</span>, <span class="cm-variable">JSON</span>.<span class="cm-property">stringify</span>(<span class="cm-variable-2">value</span>));</span></pre>
                                        <pre class="CodeMirror-line "
                                            role="presentation"><span>{' }'}<span class="cm-keyword">catch</span> (<span class="cm-def">e</span>){'{'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-string">'데이터 저장에 실패했습니다.'</span>);</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> {' }'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>{' }'}</span></pre>
                                        <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                        </span></span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span><span class="cm-keyword">export</span> <span class="cm-keyword">const</span> <span class="cm-def">getItem</span> <span class="cm-operator">=</span> (<span class="cm-def">key</span>, <span class="cm-def">defaultValue</span>) <span class="cm-operator">=&gt;</span>{' {'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>&nbsp; &nbsp;<span class="cm-keyword">try</span>{'{'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">value</span> <span class="cm-operator">=</span> <span class="cm-variable">localStorage</span>.<span class="cm-property">getItem</span>(<span class="cm-variable-2">key</span>)</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">if</span> (<span class="cm-operator">!</span><span class="cm-variable-2">value</span>) {' {'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">defaultValue</span>;</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp;{' }'}</span></pre>
                                        <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                        </span></span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable">JSON</span>.<span class="cm-property">parse</span>(<span class="cm-variable-2">value</span>);</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>&nbsp; {' }'}<span class="cm-keyword">catch</span> (<span class="cm-def">e</span>){'{'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>&nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-string">'저장된 데이터 호출에 실패했습니다. 기본 값으로 구동됩니다.'</span>);</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">defaultValue</span>;</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span> &nbsp; {' }'}</span></pre>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span>{' }'}</span></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ></div>
                    <div class="CodeMirror-gutters"></div>
                </div>
            </div>
        </pre>
    )
}

const MotiApiCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded md-focus" spellCheck="false"
            lang="javascript"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap CodeMirror-focused" lang="javascript">
                <div></div>
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer">
                        <div><div class="CodeMirror-lines" role="presentation">
                            <div role="presentation">
                                <div class="CodeMirror-measure"><pre>x</pre>
                                </div>
                                <div class="CodeMirror-measure"></div>
                                <div></div>
                                <div class="CodeMirror-code" role="presentation">
                                    <pre class="CodeMirror-line "><span><span class="cm-keyword">const</span> <span class="cm-def">changeImgSize</span> <span class="cm-operator">=</span> (<span class="cm-def">imgData</span>) <span class="cm-operator">=&gt;</span>  {'{'}</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp;<span class="cm-keyword">let</span> <span class="cm-def">index</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp;<span class="cm-keyword">while</span> (<span class="cm-atom">true</span>) {'{'}</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">if</span> (<span class="cm-variable-2">imgData</span>[<span class="cm-variable-2">index</span>].<span class="cm-property">width</span> <span class="cm-operator">/</span> <span class="cm-variable-2">imgData</span>[<span class="cm-variable-2">index</span>].<span class="cm-property">height</span> <span class="cm-operator">&gt;</span> <span class="cm-number">1</span>)  {'{'}</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">setBackImgUrl</span>(<span class="cm-variable-2">imgData</span>[<span class="cm-variable-2">index</span>].<span class="cm-property">urls</span>[<span class="cm-string">'full'</span>]);</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">break</span>;</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp; &nbsp;  {'}'}</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">index</span><span class="cm-operator">++</span>;</span></pre>
                                    <pre class="CodeMirror-line "><span> &nbsp;  {'}'}</span></pre>
                                    <div class="CodeMirror-activeline">
                                        <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                        <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                        </div>
                                        <pre class=" CodeMirror-line "><span>{'}'}</span></pre>
                                    </div>
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

const MotiBackgroundCode = () => {
    return (
        <pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellCheck="false"
            lang="javascript"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="javascript">
                <div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                <div class="CodeMirror-gutter-filler" cm-not-content="true"></div>
                <div class="CodeMirror-scroll" tabindex="-1">
                    <div class="CodeMirror-sizer">
                        <div><div class="CodeMirror-lines" role="presentation">
                            <div role="presentation"><div class="CodeMirror-measure"><pre>x</pre>
                            </div>
                                <div class="CodeMirror-measure"></div>
                                <div class="CodeMirror-code" role="presentation">
                                    <div class="CodeMirror-activeline">
                                        <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
                                        <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter">
                                        </div>
                                        <pre class=" CodeMirror-line "
                                            role="presentation"><span><span class="cm-comment">// Background.js</span></span></pre>
                                    </div>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span><span class="cm-keyword">const</span> <span class="cm-def">fetchData</span> <span class="cm-operator">=</span> <span class="cm-keyword">async</span> () <span class="cm-operator">=&gt;</span> {'{'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">imgData</span> <span class="cm-operator">=</span> <span class="cm-keyword">await</span> <span class="cm-variable">axios</span>.<span class="cm-property">get</span>(<span class="cm-string">''</span>{', {'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">params</span>{': {'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">query</span>: {<span class="cm-property">query</span>}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp; &nbsp;  {'}'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp;  {'});'}</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span> &nbsp; &nbsp;<span class="cm-variable">changeImgSize</span>(<span class="cm-variable-2">imgData</span>.<span class="cm-property">data</span>);</span></pre>
                                    <pre class=" CodeMirror-line "
                                        role="presentation"><span>{'};'}</span></pre>
                                    <pre class=" CodeMirror-line " role="presentation"><span><span cm-text="" cm-zwsp="">
                                    </span></span></pre>
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

export { MotiLocalStorageCode, MotiApiCode, MotiBackgroundCode };