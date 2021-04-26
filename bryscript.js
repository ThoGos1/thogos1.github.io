var $B = __BRYTHON__;
var _b_ = __BRYTHON__.builtins;
var $locals = $locals___main__
$locals___main__.__package__ = ""
$locals.__annotations__ = $B.empty_dict()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$locals.$f_trace = $B.enter_frame($top_frame)
var $stack_length = $B.frames_stack.length;
try{
    ;$locals.$line_info = "1,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    var $res57 = $f57();
    function $f57(){
        for (var $i59 = 0; $i59 < 10; $i59++){
            $locals___main__["i"] = $i59;
            ;$locals.$line_info = "2,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
            $B.$call(_b_.print)($B.$check_def("i",$locals___main__["i"]));
            $locals.$line_info = "1,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
        }
    }
    ;$locals.$line_info = "5,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $locals___main__["$$var"] = 23;
    ;$locals.$line_info = "7,__main__";if($locals.$f_trace !== _b_.None){$B.trace_line()};_b_.None;
    $B.$call(_b_.print)($locals___main__["$$var"]);
    $B.leave_frame({$locals, value: _b_.None})
}
catch(err){
    $B.leave_frame({$locals, value: _b_.None})
    throw err
}
