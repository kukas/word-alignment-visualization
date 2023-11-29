import json
import os
import random
from IPython.display import HTML, Javascript

module_path = os.path.dirname(os.path.abspath(__file__))
css_path = os.path.join(module_path, "static", "word_alignment_viz.css")
css_source = open(css_path).read()

js_path = os.path.join(module_path, "static", "word_alignment_viz.js")
js_source = open(js_path).read()

def show_word_alignments(src_tokens, tgt_tokens, alignment):
    src_tokens = json.dumps(src_tokens)
    tgt_tokens = json.dumps(tgt_tokens)
    alignment = json.dumps(alignment)
    random_id = "id_" + str(random.randint(0, 1000000))
    return HTML(
        f"""
        <div id="{random_id}"></div>
        <style>{css_source}</style>
        <script type="text/javascript">
        {js_source}
        show_word_alignments(document.getElementById("{random_id}"), {src_tokens}, {tgt_tokens}, {alignment});
        </script>
        """
    )
