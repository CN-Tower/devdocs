# 测试

软件测试是使用人工或自动的手段来运行或测定某个软件系统的过程，其目的在于检验它是否满足规定的需求或弄清预期结果与实际结果之间的差别。   

从是否关心软件内部结构和具体实现的角度划分，测试方法主要有白盒测试和黑盒测试。白盒测试方法主要有代码检査法、静态结构分析法、静态质量度量法、逻辑覆盖法、基本路径测试法、域测试、符号测试、路径覆盖和程序变异。黑盒测试方法主要包括等价类划分法、边界值分析法、错误推测法、因果图法、判定表驱动法、正交试验设计法、功能图法、场景法等。   

从是否执行程序的角度划分，测试方法又可分为静态测试和动态测试。静态测试包括代码检査、静态结构分析、代码质量度量等。动态测试由3部分组成：构造测试实例、执行程序和分析程序的输出结果。

## 概述

软件测试方法的目的包括：发现软件程序中的错误、对软件是否符合设计要求，以及是否符合合同中所要达到的技术要求，进行有关验证以及评估软件的质量。最终实现将高质量的软件系统交给用户的目的。而软件的基本测试方法主要有静态测试和动态测试、功能测试、性能测试、黑盒测试和白盒测试等等。

软件测试方法众多，比较常用到的测试方法有等价类划分、场景法，偶尔会使用到的测试方法有边界值和判定表，还有包括不经常使用到的正交排列法和测试大纲法。其中等价类划分、边界值分析、判定表等属于黑盒测试方法；只对功能是否可以满足规定要求进行检查，主要用于软件的确认测试阶段。白盒测试也叫做结构测试或逻辑驱动测试，是基于覆盖的全部代码和路径、条件的测试，通过测试检测产品内部性能，检验程序中的路径是否可以按照要求完成工作，但是并不对功能进行测试，主要用于软件的验证。

## 原则
### 1.尽早不断测试的原则
应当尽早不断地进行软件测试。据统计约60%的错误来自设计以前，并且修正一个软件错误所需的费用将随着软件生存周期的进展而上升。错误发现得越早，修正它所需的费用就越少。

### 2.IPO原则
测试用例由测试输入数据和与之对应的预期输出结果这两部分组成。

### 3.独立测试原则  
(1)**独立测试原则**。这是指软件测试工作由在经济上和管理上独立于开发机构的组织进行。程序员应避免检査自己的程序，程序设计机构也不应测试自己开发的程序。软件开发者难以客观、有效地测试自己的软件，而找出那些因为对需求的误解而产生的错误就更加困难。  
(2)**合法和非合法原则**。在设计时，测试用例应当包括合法的输入条件和不合法的输入条件。  
(3)**错误群集原则**。软件错误呈现群集现象。经验表明，某程序段剩余的错误数目与该程序段中已发现的错误数目成正比，所以应该对错误群集的程序段进行重点测试。
(4)**严格性原则**。严格执行测试计划，排除测试的随意性。  
(5)**覆盖原则**。应当对每一个测试结果做全面的检查。  
(6)**定义功能测试原则**。检查程序是否做了要做的事仅是成功的一半，另一半是看程序是否做了不属于它做的事。  
(7)**回归测试原则**。应妥善保留测试用例，不仅可以用于回归测试，也可以为以后的测试提供参考。  
(8)**错误不可避免原则**。在测试时不能首先假设程序中没有错误。  

## 分类

软件测试方法的分类有很多种，以测试过程中程序执行状态为依据可分为静态测试（Static Testing，ST）和动态测试（Dynamic Testing，DT）;以具体实现算法细节和系统内部结构的相关情况为根据可分黑盒测试、白盒测试和灰盒测试三类;从程序执行的方式来分类，可分为人工测试（Manual Testing，MT）和自动化测试（Automatic Testing，AT）。 
### 静态测试和动态测试
（1）**静态测试**。静态测试的含义是被测程序不运行，只依靠分析或检查源程序的语句、结构、过程等来检查程序是否有错误。即通过对软件的需求规格说明书、设计说明书以及源程序做结构分析和流程图分析，从而来找出错误。例如不匹配的参数，未定义的变量等。  

（2）**动态测试**。动态测试与静态测试相对应，其是通过运行被测试程序，对得到的运行结果与预期的结果进行比较分析，同时分析运行效率和健壮性能等。这种方法可简单分为三个步骤:构造测试实例、执行程序以及分析结果。
### 黑盒测试、白盒测试和灰盒测试
（1）**黑盒测试**。之所以被称为黑盒测试是因为可以将被测程序看成是一个无法打开的黑盒，而工作人员在不考虑任何程序内部结构和特性的条件下，根据需求规格说明书设计测试实例，并检查程序的功能是否能够按照规范说明准确无误的运行。其主要是对软件界面和软件功能进行测试。对于黑盒测试行为必须加以量化才能够有效的保证软件的质量。

（2）**白盒测试**。其与黑盒测试不同，它主要是借助程序内部的逻辑和相关信息，通过检测内部动作是否按照设计规格说明书的设定进行，检查每一条通路能否正常工作。白盒测试是从程序结构方面出发对测试用例进行设计。其主要用于检查各个逻辑结构是否合理，对应的模块独立路径是否正常以及内部结构是否有效。常用的白盒测试法有控制流分析、数据流分析、路径分析、程序变异等，其中逻辑覆盖法是主要的测试方法。

（3）**灰盒测试**。灰盒测试则介于黑盒测试和白盒测试之间。灰盒测试除了重视输出相对于出入的正确性，也看重其内部表现。但是它不可能像白盒测试那样详细和完整。它只是简单的靠一些象征性的现象或标志来判断其内部的运行情况，因此在内部结果出现错误，但输出结果正确的情况下可以采取灰盒测试方法。因为在此情况下灰盒比白盒高效，比黑盒适用性广的优势就凸显出来了。

## 测试阶段
### 单元测试
单元测试主要是对该软件的模块进行测试，通过测试以发现该模块的实际功能出现不符合的情况和编码错误。由于该模块的规模不大，功能单一，结构较简单，且测试人员可通过阅读源程序清楚知道其逻辑结构，首先应通过静态测试方法，比如静态分析、代码审查等，对该模块的源程序进行分析，按照模块的程序设计的控制流程图，以满足软件覆盖率要求的逻辑测试要求。另外，也可采用黑盒测试方法提出一组基本的测试用例，再用白盒测试方法进行验证。若用黑盒测试方法所产生的测试用例满足不了软件的覆盖要求，可采用白盒法增补出新的测试用例，以满足所需的覆盖标准。其所需的覆盖标准应视模块的实际具体情况而定。对一些质量要求和可靠性要求较高的模块，一般要满足所需条件的组合覆盖或者路径覆盖标准。
### 集成测试
集成测试是软件测试的第二阶段，在这个阶段，通常要对已经严格按照程序设计要求和标准组装起来的模块同时进行测试，明确该程序结构组装的正确性，发现和接口有关的问题，比如模块接口的数据是否会在穿越接口时发生丢失；各个模块之间因某种疏忽而产生不利的影响；将模块各个子功能组合起来后产生的功能要求达不到预期的功能要求；一些在误差范围内且可接受的误差由于长时间的积累进而到达了不能接受的程度；数据库因单个模块发生错误造成自身出现错误等等。同时因集成测试是界于单元测试和系统测试之间的，所以，集成测试具有承上启下的作用。因此有关测试人员必须做好集成测试工作。在这一阶段，一般采用的是白盒和黑盒结合的方法进行测试，验证这一阶段设计的合理性以及需求功能的实现性。
### 系统测试
一般情况下，系统测试采用黑盒法来进行测试的，以此来检查该系统是否符合软件需求。本阶段的主要测试内容包括健壮性测试、性能测试、功能测试、安装或反安装测试、用户界面测试、压力测试、可靠性及安全性测试等。为了有效保证这一阶段测试的客观性，必须由独立的测试小组来进行相关的系统测试。另外，系统测试过程较为复杂，由于在系统测试阶段不断变更需求造成功能的删除或增加，从而使程序不断出现相应的更改，而程序在更改后可能会出现新的问题，或者原本没有问题的功能由于更改导致出现问题。所以，测试人员必须进行回归测试。
### 验收测试
验收测试是最后一个阶段的测试操作，在软件产品投入正式运行前的所要进行的测试工作。和系统测试相比而言，验收测试与之的区别就只是测试人员不同，验收测试则是由用户来执行这一操作的。验收测试的主要目标是为向用户展示所开发出来的软件符合预定的要求和有关标准，并验证软件实际工作的有效性和可靠性，确保用户能用该软件顺利完成既定的任务和功能。通过了验收测试，该产品就可进行发布。但是，在实际交付给用户之后，开发人员是无法预测该软件用户在实际运用过程中是如何使用该程序的，所以从用户的角度出发，测试人员还应进行Alpha测试或Beta测试这两种情形的测试。Alpha测试是在软件开发环境下由用户进行的测试，或者模拟实际操作环境进而进行的测试。Alpha测试主要是对软件产品的功能、局域化、界面、可使用性以及性能等等方面进行评价。而Beta测试是在实际环境中由多个用户对其进行测试，并将在测试过程中发现的错误有效反馈给软件开发者。所以在测试过程中用户必须定期将所遇到的问题反馈给开发者。

## 重要性

软件测试的目的就是确保软件的质量、确认软件以正确的方式做了你所期望的事情，所以他的工作主要是发现软件的错误、有效定义和实现软件成分由低层到高层的组装过程、验证软件是否满足任务书和系统定义文档所规定的技术要求、为软件质量模型的建立提供依据。软件的测试不仅是要确保软件的质量，还要给开发人员提供信息，以方便其为风险评估做相应的准备，重要的是他要贯穿在整个软件开发的过程中，保证整个软件开发的过程是高质量的。

软件测试时在软件设计及程序编码之后，在软件运行之前进行最为合适。考虑到测试人员在软件开发过程中的寻找Bug、避免软件开发过程中的缺陷、关注用户的需求等任务，所以作为软件开发人员，软件测试要嵌入在整个软件开发的过程中，比如在软件的设计和程序的编码等阶段都得嵌入软件测试的部分，要时时检查软件的可行性，但是作为专业的软件测试工作，还是在程序编码之后，软件运行之前最为合适。