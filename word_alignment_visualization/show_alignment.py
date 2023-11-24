import json
import os
from IPython.display import HTML, Javascript

module_path = os.path.dirname(os.path.abspath(__file__))
css_path = os.path.join(module_path, "static", "word_alignment_viz.css")
js_path = os.path.join(module_path, "static", "word_alignment_viz.js")

def show_word_alignments(src_tokens, tgt_tokens, alignment):
    src_tokens = json.dumps(src_tokens)
    tgt_tokens = json.dumps(tgt_tokens)
    alignment = json.dumps(alignment)
    return Javascript(
        f"show_word_alignments(element, {src_tokens}, {tgt_tokens}, {alignment})",
        css=css_path, lib=js_path
        )
